import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhh")
export default class NhhController {
  @operation({
    summary: "Get Nhh",
  })
  @get()
  static getNhh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhh",
  })
  @post("{id}")
  static createNhh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
