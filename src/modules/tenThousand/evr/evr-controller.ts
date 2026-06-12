import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evr")
export default class EvrController {
  @operation({
    summary: "Get Evr",
  })
  @get()
  static getEvr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evr",
  })
  @post("{id}")
  static createEvr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
