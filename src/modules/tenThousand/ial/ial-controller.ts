import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ial")
export default class IalController {
  @operation({
    summary: "Get Ial",
  })
  @get()
  static getIal = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ial",
  })
  @post("{id}")
  static createIal = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
