import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aea")
export default class AeaController {
  @operation({
    summary: "Get Aea",
  })
  @get()
  static getAea = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aea",
  })
  @post("{id}")
  static createAea = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
