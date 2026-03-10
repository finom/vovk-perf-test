import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axc")
export default class AxcController {
  @operation({
    summary: "Get Axc",
  })
  @get()
  static getAxc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Axc",
  })
  @post("{id}")
  static createAxc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
