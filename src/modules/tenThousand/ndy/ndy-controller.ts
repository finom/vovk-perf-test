import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndy")
export default class NdyController {
  @operation({
    summary: "Get Ndy",
  })
  @get()
  static getNdy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ndy",
  })
  @post("{id}")
  static createNdy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
