import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chj")
export default class ChjController {
  @operation({
    summary: "Get Chj",
  })
  @get()
  static getChj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Chj",
  })
  @post("{id}")
  static createChj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
