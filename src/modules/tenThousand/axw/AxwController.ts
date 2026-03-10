import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axw")
export default class AxwController {
  @operation({
    summary: "Get Axw",
  })
  @get()
  static getAxw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Axw",
  })
  @post("{id}")
  static createAxw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
