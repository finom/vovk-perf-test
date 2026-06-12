import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iao")
export default class IaoController {
  @operation({
    summary: "Get Iao",
  })
  @get()
  static getIao = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iao",
  })
  @post("{id}")
  static createIao = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
