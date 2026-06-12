import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("av")
export default class AvController {
  @operation({
    summary: "Get Av",
  })
  @get()
  static getAv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Av",
  })
  @post("{id}")
  static createAv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
