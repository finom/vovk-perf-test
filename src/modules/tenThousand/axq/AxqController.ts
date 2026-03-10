import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axq")
export default class AxqController {
  @operation({
    summary: "Get Axq",
  })
  @get()
  static getAxq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Axq",
  })
  @post("{id}")
  static createAxq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
