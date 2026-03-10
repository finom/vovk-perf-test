import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elz")
export default class ElzController {
  @operation({
    summary: "Get Elz",
  })
  @get()
  static getElz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Elz",
  })
  @post("{id}")
  static createElz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
