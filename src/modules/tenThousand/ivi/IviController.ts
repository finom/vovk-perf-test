import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivi")
export default class IviController {
  @operation({
    summary: "Get Ivi",
  })
  @get()
  static getIvi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ivi",
  })
  @post("{id}")
  static createIvi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
