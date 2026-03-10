import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clc")
export default class ClcController {
  @operation({
    summary: "Get Clc",
  })
  @get()
  static getClc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Clc",
  })
  @post("{id}")
  static createClc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
