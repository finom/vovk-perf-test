import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gle")
export default class GleController {
  @operation({
    summary: "Get Gle",
  })
  @get()
  static getGle = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gle",
  })
  @post("{id}")
  static createGle = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
