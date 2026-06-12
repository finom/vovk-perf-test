import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkv")
export default class DkvController {
  @operation({
    summary: "Get Dkv",
  })
  @get()
  static getDkv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dkv",
  })
  @post("{id}")
  static createDkv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
