import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmb")
export default class NmbController {
  @operation({
    summary: "Get Nmb",
  })
  @get()
  static getNmb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nmb",
  })
  @post("{id}")
  static createNmb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
