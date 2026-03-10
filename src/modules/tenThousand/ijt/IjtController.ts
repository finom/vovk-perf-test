import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijt")
export default class IjtController {
  @operation({
    summary: "Get Ijt",
  })
  @get()
  static getIjt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ijt",
  })
  @post("{id}")
  static createIjt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
