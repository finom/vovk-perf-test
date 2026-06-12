import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqr")
export default class KqrController {
  @operation({
    summary: "Get Kqr",
  })
  @get()
  static getKqr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kqr",
  })
  @post("{id}")
  static createKqr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
