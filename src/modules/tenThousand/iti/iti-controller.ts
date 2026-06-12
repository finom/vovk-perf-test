import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iti")
export default class ItiController {
  @operation({
    summary: "Get Iti",
  })
  @get()
  static getIti = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iti",
  })
  @post("{id}")
  static createIti = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
