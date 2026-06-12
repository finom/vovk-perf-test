import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dib")
export default class DibController {
  @operation({
    summary: "Get Dib",
  })
  @get()
  static getDib = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dib",
  })
  @post("{id}")
  static createDib = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
