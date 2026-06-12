import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blf")
export default class BlfController {
  @operation({
    summary: "Get Blf",
  })
  @get()
  static getBlf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Blf",
  })
  @post("{id}")
  static createBlf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
