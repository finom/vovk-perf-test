import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drk")
export default class DrkController {
  @operation({
    summary: "Get Drk",
  })
  @get()
  static getDrk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Drk",
  })
  @post("{id}")
  static createDrk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
