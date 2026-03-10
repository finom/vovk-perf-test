import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epz")
export default class EpzController {
  @operation({
    summary: "Get Epz",
  })
  @get()
  static getEpz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Epz",
  })
  @post("{id}")
  static createEpz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
