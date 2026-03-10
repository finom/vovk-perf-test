import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epm")
export default class EpmController {
  @operation({
    summary: "Get Epm",
  })
  @get()
  static getEpm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Epm",
  })
  @post("{id}")
  static createEpm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
