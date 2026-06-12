import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drh")
export default class DrhController {
  @operation({
    summary: "Get Drh",
  })
  @get()
  static getDrh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Drh",
  })
  @post("{id}")
  static createDrh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
