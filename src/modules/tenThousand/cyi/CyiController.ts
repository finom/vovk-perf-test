import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyi")
export default class CyiController {
  @operation({
    summary: "Get Cyi",
  })
  @get()
  static getCyi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cyi",
  })
  @post("{id}")
  static createCyi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
