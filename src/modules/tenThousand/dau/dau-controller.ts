import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dau")
export default class DauController {
  @operation({
    summary: "Get Dau",
  })
  @get()
  static getDau = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dau",
  })
  @post("{id}")
  static createDau = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
