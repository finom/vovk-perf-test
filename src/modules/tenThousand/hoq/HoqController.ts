import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hoq")
export default class HoqController {
  @operation({
    summary: "Get Hoq",
  })
  @get()
  static getHoq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hoq",
  })
  @post("{id}")
  static createHoq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
