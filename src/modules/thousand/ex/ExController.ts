import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ex")
export default class ExController {
  @operation({
    summary: "Get Ex",
  })
  @get()
  static getEx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ex",
  })
  @post("{id}")
  static createEx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
