import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azv")
export default class AzvController {
  @operation({
    summary: "Get Azv",
  })
  @get()
  static getAzv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Azv",
  })
  @post("{id}")
  static createAzv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
