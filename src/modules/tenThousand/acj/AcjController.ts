import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acj")
export default class AcjController {
  @operation({
    summary: "Get Acj",
  })
  @get()
  static getAcj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Acj",
  })
  @post("{id}")
  static createAcj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
