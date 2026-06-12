import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eij")
export default class EijController {
  @operation({
    summary: "Get Eij",
  })
  @get()
  static getEij = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eij",
  })
  @post("{id}")
  static createEij = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
