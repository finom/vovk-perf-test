import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aae")
export default class AaeController {
  @operation({
    summary: "Get Aae",
  })
  @get()
  static getAae = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aae",
  })
  @post("{id}")
  static createAae = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
