import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drn")
export default class DrnController {
  @operation({
    summary: "Get Drn",
  })
  @get()
  static getDrn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Drn",
  })
  @post("{id}")
  static createDrn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
