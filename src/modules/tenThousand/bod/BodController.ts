import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bod")
export default class BodController {
  @operation({
    summary: "Get Bod",
  })
  @get()
  static getBod = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bod",
  })
  @post("{id}")
  static createBod = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
