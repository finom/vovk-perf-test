import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izn")
export default class IznController {
  @operation({
    summary: "Get Izn",
  })
  @get()
  static getIzn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Izn",
  })
  @post("{id}")
  static createIzn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
