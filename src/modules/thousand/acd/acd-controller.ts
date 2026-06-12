import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acd")
export default class AcdController {
  @operation({
    summary: "Get Acd",
  })
  @get()
  static getAcd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Acd",
  })
  @post("{id}")
  static createAcd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
