import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kch")
export default class KchController {
  @operation({
    summary: "Get Kch",
  })
  @get()
  static getKch = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kch",
  })
  @post("{id}")
  static createKch = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
