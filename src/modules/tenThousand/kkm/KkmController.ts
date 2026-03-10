import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkm")
export default class KkmController {
  @operation({
    summary: "Get Kkm",
  })
  @get()
  static getKkm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kkm",
  })
  @post("{id}")
  static createKkm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
