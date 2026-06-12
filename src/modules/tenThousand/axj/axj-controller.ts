import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axj")
export default class AxjController {
  @operation({
    summary: "Get Axj",
  })
  @get()
  static getAxj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Axj",
  })
  @post("{id}")
  static createAxj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
