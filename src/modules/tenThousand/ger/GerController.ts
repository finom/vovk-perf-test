import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ger")
export default class GerController {
  @operation({
    summary: "Get Ger",
  })
  @get()
  static getGer = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ger",
  })
  @post("{id}")
  static createGer = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
