import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krd")
export default class KrdController {
  @operation({
    summary: "Get Krd",
  })
  @get()
  static getKrd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Krd",
  })
  @post("{id}")
  static createKrd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
