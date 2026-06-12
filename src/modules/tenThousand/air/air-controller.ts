import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("air")
export default class AirController {
  @operation({
    summary: "Get Air",
  })
  @get()
  static getAir = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Air",
  })
  @post("{id}")
  static createAir = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
