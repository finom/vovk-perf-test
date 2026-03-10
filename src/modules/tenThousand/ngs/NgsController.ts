import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngs")
export default class NgsController {
  @operation({
    summary: "Get Ngs",
  })
  @get()
  static getNgs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ngs",
  })
  @post("{id}")
  static createNgs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
