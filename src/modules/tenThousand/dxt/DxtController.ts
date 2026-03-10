import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxt")
export default class DxtController {
  @operation({
    summary: "Get Dxt",
  })
  @get()
  static getDxt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dxt",
  })
  @post("{id}")
  static createDxt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
