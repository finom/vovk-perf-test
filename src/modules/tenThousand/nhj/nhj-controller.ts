import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhj")
export default class NhjController {
  @operation({
    summary: "Get Nhj",
  })
  @get()
  static getNhj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhj",
  })
  @post("{id}")
  static createNhj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
