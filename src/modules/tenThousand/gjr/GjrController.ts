import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjr")
export default class GjrController {
  @operation({
    summary: "Get Gjr",
  })
  @get()
  static getGjr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gjr",
  })
  @post("{id}")
  static createGjr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
