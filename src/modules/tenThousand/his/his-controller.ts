import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("his")
export default class HisController {
  @operation({
    summary: "Get His",
  })
  @get()
  static getHis = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create His",
  })
  @post("{id}")
  static createHis = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
