import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iff")
export default class IffController {
  @operation({
    summary: "Get Iff",
  })
  @get()
  static getIff = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iff",
  })
  @post("{id}")
  static createIff = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
