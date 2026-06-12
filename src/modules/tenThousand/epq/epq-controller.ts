import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epq")
export default class EpqController {
  @operation({
    summary: "Get Epq",
  })
  @get()
  static getEpq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Epq",
  })
  @post("{id}")
  static createEpq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
