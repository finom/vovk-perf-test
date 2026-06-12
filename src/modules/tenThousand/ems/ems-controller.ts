import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ems")
export default class EmsController {
  @operation({
    summary: "Get Ems",
  })
  @get()
  static getEms = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ems",
  })
  @post("{id}")
  static createEms = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
