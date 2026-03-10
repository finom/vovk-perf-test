import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evb")
export default class EvbController {
  @operation({
    summary: "Get Evb",
  })
  @get()
  static getEvb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evb",
  })
  @post("{id}")
  static createEvb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
