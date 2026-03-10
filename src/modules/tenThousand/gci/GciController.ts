import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gci")
export default class GciController {
  @operation({
    summary: "Get Gci",
  })
  @get()
  static getGci = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gci",
  })
  @post("{id}")
  static createGci = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
