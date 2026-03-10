import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flr")
export default class FlrController {
  @operation({
    summary: "Get Flr",
  })
  @get()
  static getFlr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Flr",
  })
  @post("{id}")
  static createFlr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
