import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epb")
export default class EpbController {
  @operation({
    summary: "Get Epb",
  })
  @get()
  static getEpb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Epb",
  })
  @post("{id}")
  static createEpb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
